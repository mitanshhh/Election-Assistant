export interface Answer {
    label: string;
    help?: string;
    nextNode: string;
}
export interface DecisionNode {
    id: string;
    question: string;
    helpText?: string;
    answers: Answer[];
}
export interface TreeData {
    nodes: DecisionNode[];
    startNode: string;
}
//# sourceMappingURL=types.d.ts.map