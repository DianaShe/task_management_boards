import { ColumnHeadBarContainer } from "./ColumnHeadBar.styled"

export const ColumnHeadBar = ({status}) => {
    return (
    <ColumnHeadBarContainer>
        {status}
    </ColumnHeadBarContainer>
    )
}