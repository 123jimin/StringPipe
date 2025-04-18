import "./gap.css";

import { useCallback, useState } from "preact/hooks";

import { classNames } from "@/util";

import type { DataType, DataTypeName, PipeDefinition } from "../type";
import { PIPE_BY_ID, PIPE_CATEGORIES, PipeCatalog } from "../catalog";

interface PipeGapProps {
    inputType?: DataTypeName;
    outputType?: DataTypeName;

    defaultShowCatalog?: boolean;

    onClickAddPipe?: (pipe_def: PipeDefinition) => void;
}

export function PipeGap({ inputType, outputType, defaultShowCatalog: default_show_catalog, onClickAddPipe }: PipeGapProps) {
    const [show_catalog, setShowCatalog] = useState(default_show_catalog ?? false);

    const toggleShowCatalog = useCallback(() => {
        setShowCatalog((show_catalog) => !show_catalog);
    }, []);

    const handleOnSelect = useCallback((def_id: string) => {
        setShowCatalog(false);

        const pipe_def = PIPE_BY_ID.get(def_id);
        if(!pipe_def) return;

        onClickAddPipe?.(pipe_def);
    }, [onClickAddPipe]);

    return <div class={classNames("sp-pipe-gap", `sp-pipe-gap-${outputType ?? 'null'}`)}>
        <button class="sp-pipe-gap-toggle-fold" onClick={toggleShowCatalog}>{ show_catalog ? "Hide" : "Insert Pipe" }</button>
        { show_catalog && <PipeCatalog categories={PIPE_CATEGORIES} onSelect={handleOnSelect} /> }
    </div>;
}