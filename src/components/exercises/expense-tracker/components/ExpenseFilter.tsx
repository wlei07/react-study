import categories from "../categories.ts";


interface ExpenseFilterProperties {
    onSelectCategory: (category: string) => void;
}

export default function ExpenseFilter({onSelectCategory}: ExpenseFilterProperties) {
    return (
        <select className="form-select" onChange={(event) => onSelectCategory(event.target.value)}>
            <option value="">All categories</option>
            {categories.map(category => <option key={category} value={category}>{category}</option>)}
        </select>
    );
}
