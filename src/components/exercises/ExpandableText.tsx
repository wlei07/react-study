import {useState} from "react";

interface ExpandableTextProps {
    children: string;
    maxChars?: number
}
/* usage example:
    return <ExpandableText maxChars={10}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi fugit rerum similique
        tenetur voluptatem? Amet, consequuntur dolorem et id iste officia perferendis possimus, quo quod recusandae
        ullam vel vero voluptatibus. Accusantium alias beatae corporis cupiditate eaque eligendi quo sed. Ad amet
        asperiores aspernatur distinctio, expedita iste itaque iure labore neque odio perspiciatis porro reiciendis rem
        repellat tempore temporibus voluptatum. A ad, aliquam assumenda at consequatur culpa debitis, deleniti dicta
        dolore dolores doloribus eius illo inventore ipsa necessitatibus nemo nihil nobis non nostrum obcaecati quae
        quam quidem sed sint sit soluta sunt suscipit velit veritatis voluptate? Adipisci amet atque pariatur quam
        quidem? Accusantium aliquam atque, aut blanditiis cumque cupiditate dolor dolorem earum eos excepturi facere
        itaque magni minima molestias nemo, non quod sit tenetur unde ut? Commodi dignissimos ducimus hic incidunt non
        porro qui quidem sint sunt ullam? Adipisci autem dignissimos dolorum, eligendi et explicabo hic, laudantium
        minus molestiae nam neque nisi non nulla quaerat quam reiciendis similique tempore temporibus tenetur totam
        ullam voluptas voluptatem voluptatibus. Commodi deserunt dignissimos esse fuga illum iste quas quia, quis
        recusandae suscipit. A accusamus adipisci aliquam, aperiam at, aut blanditiis dignissimos dolor eius eos
        expedita facilis hic illo impedit itaque labore laborum maxime minima modi molestiae necessitatibus nihil
        placeat quas quasi quibusdam quos rem repudiandae rerum similique sit vel vero voluptates voluptatibus! A
        aliquid deleniti, dolorum ipsam itaque iure laboriosam magnam, minima natus nihil nobis optio saepe ut. Ad
        consequuntur debitis dolore doloribus earum et hic illo, odit quam quo recusandae voluptates. Cupiditate
        deserunt ducimus facilis laboriosam praesentium quod rem! Culpa hic inventore maiores nisi nostrum praesentium
        quaerat quidem quo repellendus voluptate! Cum enim, eum. Ab accusamus, ad corporis cupiditate dolor dolore
        doloremque dolores ex nemo neque odit omnis quae quam quos sunt suscipit tempora voluptatibus. Aut autem
        delectus deserunt eos hic iusto vero?</ExpandableText>
 */
export default function ExpandableText({maxChars = 100, children}: ExpandableTextProps) {
    let [expanded, setExpanded] = useState(false);
    if (children.length <= maxChars) {
        return (
            <div>{children}</div>
        );
    } else if (expanded) {
        return <>{children}
            <button onClick={() => setExpanded(!expanded)}>Less</button>
        </>
    } else {
        return <>{children.substring(0, maxChars) + '...'}
            <button onClick={() => setExpanded(!expanded)}>More</button>
        </>
    }
}
