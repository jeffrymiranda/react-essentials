import {CORE_CONCEPTS} from "../data";
import CoreConcept from "./CoreConcept";
import Section from "./Section";

export default function CoreComponents() {
    return (
        <Section title="Core Concepts" id="core-concepts">
            <ul>
                {/*Option #1, #2 and #3*/}
                {/*<CoreConcept
                            title={CORE_CONCEPTS[0].title}
                            description={CORE_CONCEPTS[0].description}
                            image={CORE_CONCEPTS[0].image} />*/}

                {/*<CoreConcept {...CORE_CONCEPTS[0]}/>*/}

                {/*Option #4*/}
                {/*<CoreConcept concept={CORE_CONCEPTS[0]}/>*/}
                {
                    CORE_CONCEPTS.map(conceptItem =>
                        <CoreConcept key={conceptItem.title} concept={conceptItem}/>
                    )
                }
            </ul>
        </Section>
    );
}
