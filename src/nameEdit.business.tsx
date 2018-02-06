export type OnChangeTextType = (newText : string) => void;

export const onChangeText = (onNameUpdated : OnChangeTextType) => (e : React.ChangeEvent<HTMLInputElement>) => {
    onNameUpdated(e.target.value);
}
