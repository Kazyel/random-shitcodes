import { useRef } from "react";
import useList from "../hooks/useList";

const List = () => {
    const { list, handleListChange } = useList();
    const inputRef = useRef<HTMLInputElement>(null);

    const handleAddPokemon = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            if (!list.includes(inputRef.current!.value)) {
                handleListChange(inputRef.current!.value);
                inputRef.current!.value = "";
            }
        }
    };

    return (
        <div className="card">
            <input
                onChange={(e) => (inputRef.current!.value = e.target.value)}
                onKeyDown={(e) => {
                    handleAddPokemon(e);
                }}
                ref={inputRef}
                type="text"
                placeholder="Add any item..."
            />

            <ul className="item-list">
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default List;
