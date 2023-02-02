import { useProductContext } from "../providers/Context";
import Filter from "./Filter";
import { Categorys, Select } from "../styled";

export default function Category() {
  const { category, filteredItems, setItem, theme } = useProductContext();

  return (
    <Categorys className={theme === true ? "show" : null}>
      <Select
        defaultValue={"Category"}
        onChange={(e) => {
          if (e.target.value === "All") {
            setItem(filteredItems);
          } else {
            setItem(
              filteredItems.filter(
                (product) => product.category === e.target.value
              )
            );
          }
        }}
      >
        {category.map((list) => {
          return <option key={list.id}>{list.title}</option>;
        })}
      </Select>
      <Filter />
    </Categorys>
  );
}
