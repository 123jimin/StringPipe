import "./catalog.css";

import { classNames } from "@/util";
import type { DataType, PipeMetadata, PipeCategory } from "../type";

export interface PipeCatalogProps {
    categories: PipeCategory[];

    onSelect?: (id: string) => void;
}

export function PipeCatalog(props: PipeCatalogProps) {
    const {
        categories,
        onSelect,
    } = props;

    return <div class="sp-pipe-catalog">
        <div class="sp-pipe-catalog-categories">
            { categories.map(category => <PipeCatalogCategory key={category.id} category={category} onSelect={onSelect} />) }
        </div>
    </div>;
}

export interface PipeCatalogCategoryProps {
    category: PipeCategory;
    onSelect?: (id: string) => void;
}

export function PipeCatalogCategory({category, onSelect}: PipeCatalogCategoryProps) {
    return <div class={classNames("sp-pipe-catalog-category")}>
        <div class="sp-pipe-catalog-category-name">{category.name ?? category.id}</div>
        <div class="sp-pipe-catalog-category-items">
            { category.entries.map(entry => <PipeCatalogItem key={entry.id} entry={entry} onClick={() => onSelect?.(entry.id)} />) }
        </div>
    </div>
}

export interface PipeCatalogItemProps<InputType extends DataType|null, OutputType extends DataType> {
    entry: PipeMetadata<InputType, OutputType>;

    onClick?: () => void;
}

export function PipeCatalogItem({entry, onClick}: PipeCatalogItemProps<DataType|null, DataType>) {
    return <div class={classNames("sp-pipe-catalog-item")} onClick={onClick}>
        {entry.name ?? entry.id}
    </div>
}