import ListHead from '../Head';
import * as S from './styles';
import { ContentCopy, DeleteOutlined, EditOutlined, Visibility } from '@mui/icons-material';
import { CircularProgress, IconButton, TableBody, Tooltip } from '@mui/material';
import React, { FC, Fragment } from 'react';

export interface IDesktopListProps {
  data;
  order;
  orderBy;
  columns;
  pageLimit;
  isLoading;
  numSelected;
  colSpan;
  emptyRows;
  selectedRows;
  onChangeChecked;
  onCopy;
  onEdit;
  onView;
  onSort;
  onDelete;
  onRowClick;
}

export const DesktopList: FC<IDesktopListProps> = ({
  data,
  order,
  orderBy,
  columns,
  pageLimit,
  isLoading,
  numSelected,
  colSpan,
  selectedRows,
  onChangeChecked,
  onCopy,
  onEdit,
  onView,
  onSort,
  onDelete,
  onRowClick
}) => {
  const handleCopy = (id: string) => {
    if (onCopy) onCopy(id);
  };

  const handleDelete = (id: string) => {
    if (onDelete) onDelete(id);
  };

  const handleEdit = (id: string) => {
    if (onEdit) onEdit(id);
  };

  const handleView = (id: string, tokenId?: string) => {
    if (onView) onView(id, tokenId);
  };

  return (
    <S.List>
      <ListHead
        order={order}
        orderBy={orderBy}
        onSort={onSort}
        columns={columns}
        numSelected={numSelected}
        rowCount={data.length}
        onChangeChecked={onChangeChecked}
        visibleAction={!!(onCopy || onDelete || onEdit || onView)}
      />
      <TableBody>
        {!isLoading ? (
          data.length > 0 ? (
            <Fragment>
              {data.map((row, rIndex) => (
                <S.Row
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={rIndex}
                  className={selectedRows.some((item) => item.id === row.id) ? 'checked' : ''}
                  onClick={() => onRowClick && onRowClick(row.id)}
                >
                  {columns.map((column, rowId) => (
                    <S.Cell align={column.align} key={`table-cell-${rIndex}-${rowId}`}>
                      {column.render ? column.render(row, rowId, data) : column.field ? row[column.field] : null}
                    </S.Cell>
                  ))}
                  {(onCopy || onDelete || onEdit || onView) && (
                    <S.Cell align="right" sx={{ whiteSpace: 'noWrap' }}>
                      {onCopy && (
                        <Tooltip title="Copy id_rsa.pub content to clipboard" arrow>
                          <IconButton onClick={() => handleCopy(row?.id as string)}>
                            <ContentCopy />
                          </IconButton>
                        </Tooltip>
                      )}
                      {onDelete && (
                        <IconButton onClick={() => handleDelete(row?.id as string)}>
                          <DeleteOutlined />
                        </IconButton>
                      )}
                      {onEdit && (
                        <IconButton onClick={() => handleEdit(row?.id as string)}>
                          <EditOutlined />
                        </IconButton>
                      )}
                      {onView && (
                        <IconButton
                          onClick={() => {
                            if (row?.details) {
                              handleView(row?.details.transactionHash as string, row?.tokenId as string);
                            } else {
                              handleView(row?.id as string, row?.tokenId as string);
                            }
                          }}
                        >
                          <Visibility />
                        </IconButton>
                      )}
                    </S.Cell>
                  )}
                </S.Row>
              ))}
            </Fragment>
          ) : (
            <S.Row
              style={{
                height: 56 * pageLimit
              }}
            >
              <S.Cell colSpan={colSpan} sx={{ textAlign: 'center' }}>
                There is no data to display!
              </S.Cell>
            </S.Row>
          )
        ) : (
          <S.Row
            style={{
              height: 56 * pageLimit
            }}
          >
            <S.Cell colSpan={colSpan} sx={{ textAlign: 'center' }}>
              <CircularProgress />
            </S.Cell>
          </S.Row>
        )}
      </TableBody>
    </S.List>
  );
};
