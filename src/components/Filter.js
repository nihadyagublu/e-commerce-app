import { Selects } from "../styled";
import { useProductContext } from "../providers/Context";
export default function Filter() {
  const { item, setItem, filters } = useProductContext();
  const handleChange = (e) => {
    let sorted;
    if (e.target.value === "0") {
      sorted = item.sort((a, b) => a.price - b.price);
    } else if (e.target.value === "1") {
      sorted = item.sort((a, b) => b.price - a.price);
    } else {
      sorted = item.sort((a, b) => a.title.localeCompare(b.title));
    }
    setItem([...sorted]);
  };
  return (
    <div>
      <Selects defaultValue={"Filter"} onChange={handleChange}>
        {filters.map((list, index) => (
          <option key={index} value={list.value}>
            {list.title}
          </option>
        ))}
      </Selects>
    </div>
  );
}
