import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { constants } from './constants';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { LinearProgress, SnackbarContent } from '@mui/material';
const columns: GridColDef[] = constants.GRID_COLUMNS;

export default function Table(props: any) {
    let gqlQuery: any = null;
    const [page, setPage] = useState(0);

    // CHECKING CURRENT MOVEMENT AND BASED ON IT FETCHING QUERY
    props.pageInfo[page].movement == constants.MOVEMENT.LOAD ? gqlQuery = constants.QUERY(null, constants.CURSORS.AFTER) :
        props.pageInfo[page].movement == constants.MOVEMENT.FORWARD ? gqlQuery = constants.QUERY(props.pageInfo[page].currentCursor, constants.CURSORS.AFTER) :
            gqlQuery = constants.QUERY(props.pageInfo[page - 1].previousCursor, constants.CURSORS.BEFORE);

    // CALLING THE GQL QUERY
    const { loading, error, data } = useQuery(gqlQuery)
    if (loading) return <LinearProgress />;
    if (error) return <SnackbarContent message={error.message} />;

    // HANDING PAGE CHANGE
    const handlePageChange = (pageNum: number, data: any) => {
        const movement: number = pageNum > page ? constants.MOVEMENT.FORWARD : constants.MOVEMENT.BACKWARD;
        props.handlePageChange(data.search.pageInfo.startCursor, data.search.pageInfo.endCursor, movement, pageNum)
        setPage(pageNum)
    }
    return (
        <DataGrid
            onCellClick={(params: any) => {
                if (params)
                    window.open(params.row.url, "_blank")
            }}
            rows={data.search.nodes}
            autoHeight
            rowHeight={50}
            columns={columns}
            pageSize={constants.PAGE_SIZE}
            rowCount={data.search.repositoryCount}
            onPageChange={(pageNum: number) => handlePageChange(pageNum, data)}
            page={page}
            components={{
                Toolbar: GridToolbar
            }}
            paginationMode="server"
        />
    );
}


