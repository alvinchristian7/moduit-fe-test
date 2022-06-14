import React from 'react'
import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  gridPageSizeSelector,
  useGridApiContext,
  useGridSelector,
} from '@mui/x-data-grid';
import { Pagination, PaginationItem, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { ArrowDropDownIcon, ArrowDropUpIcon, ArrowDropLeftIcon, ArrowDropRightIcon, ArrowBackIcon } from '@mui/icons-material';
import cn from 'classnames'
import './index.scss'

const pageSizeEnum = [5, 10, 25, 50, 100]

function CustomPagination() {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  const pageSize = useGridSelector(apiRef, gridPageSizeSelector);

  return (
    <div className='w-full flex justify-between items-center'>
      <Pagination
        // className='flex-initial'
        color="primary"
        shape='rounded'
        count={pageCount}
        page={page + 1}
        onChange={(event, value) => apiRef.current.setPage(value - 1)}
        renderItem={(item) => {
          return (
            <PaginationItem
              {...item}
              components={{ previous: ArrowDropLeftIcon, next: ArrowDropRightIcon }}
              variant="outlined"
              sx={{
                m: 0,
                border: 'none',
                borderRadius: ['previous', 'next'].includes(item.type) ? '20px' : 'initial',
                '&.Mui-selected': {
                  border: 'none',
                  borderBottom: '2px solid #1976d2',
                  borderRadius: 'initial',
                  color: 'initial',
                  bgcolor: 'initial',
                  fontWeight: 'bold',
                },
              }}
            />
          )
        }}
      />
      <div className='flex items-center'>
        <div className='text-blue-600 font-bold'>Show</div>
        <FormControl sx={{ m: 1, minWidth: 60 }} size="small">
          <Select
            value={pageSize}
            onChange={({ target: { value } }) => {
              apiRef.current.setPageSize(value)
            }}
            sx={{
              borderRadius: 10
            }}
          >
            {pageSizeEnum.map(num => <MenuItem value={num} key={num}>{num}</MenuItem>)}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export function SortedDescendingIcon() {
  return <ArrowDropDownIcon className="icon" />;
}

export function SortedAscendingIcon() {
  return <ArrowDropUpIcon className="icon" />;
}

export default function CustomPaginationGrid({ components, className, ...props }) {
  // const { data } = useDemoData({
  //   dataSet: 'Commodity',
  //   rowLength: 100,
  //   maxColumns: 6,
  // });

  return (
    // <Box sx={{ height: 400, width: '100%' }}>
    <DataGrid
      pagination
      initialState={{
        pagination: {
          pageSize: pageSizeEnum[0]
        }
      }}
      // pageSize={5}
      // rowsPerPageOptions={[5, 10, 25, 50, 100]}
      components={{
        Pagination: CustomPagination,
        ColumnSortedDescendingIcon: ArrowDropDownIcon,
        ColumnSortedAscendingIcon: ArrowDropUpIcon,
        ...components,
      }}
      disableColumnMenu
      className={cn('CustomTable', className)}
      {...props}
    />
    // </Box>
  );
}