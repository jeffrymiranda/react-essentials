import {EXAMPLES} from "../data";
import TabButton from "./TabButton";
import {useState} from "react";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {

    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
    }

    return (
        <Section title="Examples" id="examples">
            <Tabs buttons={
                Object.entries(EXAMPLES).map(([key, example], index) => (
                    <TabButton key={key} isSelected={selectedTopic && selectedTopic.title === example.title}
                               onClick={() => handleSelect(example)}>{example.title}</TabButton>
                ))
            }>
                {
                    !selectedTopic ?
                        <p>Please select a topic</p> :
                        <div id="tab-content">
                            <h3>{selectedTopic.title}</h3>
                            <p>{selectedTopic.description}</p>
                            <pre>
                            <code>
                                {selectedTopic.code}
                            </code>
                        </pre>
                        </div>
                }
            </Tabs>
        </Section>
    );
}
