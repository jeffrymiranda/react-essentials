export default function Tabs({buttonsContainer = "menu", buttons, children}) {
    // Must be defined in TitleCase to be recognized as a custom component.
    const ButtonsContainer = buttonsContainer;
    return (
        <>
            <ButtonsContainer>{buttons}</ButtonsContainer>
            {children}
        </>
    );
}
