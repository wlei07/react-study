import {FieldValues, useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useState} from "react";

enum Categories {
    GROCERIES = "Groceries",
    Utilities = "Utilities",
    Entertainment = "Entertainment"
}

const schema = z.object({
    description: z.string().min(3, {message: 'Description should be at least 3 characters.'}),
    amount: z.number({required_error: "Amount is required.", invalid_type_error: 'Age field is required.'}),
    category: z.enum([Categories.GROCERIES.toString(), Categories.Utilities.toString(), Categories.Entertainment.toString()], {message: 'Category is required.'}),
});
type Expense = z.infer<typeof schema>;
const allCategories = "all categories";

export default function ExpenseTrackerMyOwnImplementation() {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<Expense>({resolver: zodResolver(schema)});
    const [expenses, setExpenses] =
        useState<Expense[]>([{description: "desc", amount: 23, category: Categories.GROCERIES.toString()}]);
    const [categoryFilter, setCategoryFilter] = useState(allCategories);
    const onSubmit = (expense: FieldValues) => {
        setExpenses([...expenses, expense as Expense]);
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="mb-5">
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input
                        {...register('description')}
                        id="description"
                        type="text"
                        className="form-control"
                    />
                    {errors.description && (<p className="text-danger">{errors.description.message}</p>)}
                </div>
                <div className="mb-3">
                    <label htmlFor="amount" className="form-label">Amount</label>
                    <input
                        {
                            /*valueAsNumber so that form validation won't give strange error message like: ""*/
                            /*'Expected number, received string'*/
                            ...register('amount', {valueAsNumber: true})
                        }
                        id="amount"
                        type="number"
                        className="form-control"
                    />
                    {errors.amount && (<p className="text-danger">{errors.amount.message}</p>)}
                </div>
                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Category</label>
                    <select
                        className="form-select"
                        aria-label="Select category"
                        id="category"
                        defaultValue=""
                        {...register('category')}
                    >
                        <option value=""></option>
                        {Object.values(Categories).map((c, index) => (
                            <option key={index} value={c.toString()}>{c.toString()}</option>
                        ))}
                    </select>
                    {errors.category && (<p className="text-danger">{errors.category.message}</p>)}
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
            <select
                className="form-select mb-3"
                aria-label="Filter category"
                id="category-filter"
                defaultValue="all categories"
                onChange={(e) => setCategoryFilter(e.target.value)}
            >
                <option value={allCategories}>All categories</option>
                {Object.values(Categories).map((c, index) => (
                    <option key={index} value={c.toString()}>{c.toString()}</option>
                ))}
            </select>
            { expenses.length > 0 &&
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th scope="col">Description</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Category</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                {expenses.map((expense, index) => (
                    matchExpenseCategory(expense, categoryFilter) &&
                    <tr key={index}>
                        <td>{expense.description}</td>
                        <td>{expense.amount}</td>
                        <td>{expense.category}</td>
                        <td>
                            <button
                                className="btn btn-outline-danger"
                                onClick={() => {
                                    setExpenses(
                                        [...expenses.slice(0, index), ...expenses.slice(index + 1, expenses.length)]
                                    )
                                }}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
                <tfoot>
                <tr>
                    <td>Total</td>
                    <td>{expenses.reduce((total, expense) =>
                        total + (matchExpenseCategory(expense, categoryFilter) ? expense.amount : 0), 0
                    ).toFixed(2)}</td>
                    <td></td>
                    <td></td>
                </tr>
                </tfoot>
            </table>
            }
        </>
    );
}

function matchExpenseCategory(expense: Expense, categoryToMatch: string) {
    return categoryToMatch === allCategories || expense.category === categoryToMatch
}
