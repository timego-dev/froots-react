import { Order } from '../../../interfaces';
import * as S from './styles';
import { ExpandMore } from '@mui/icons-material';
import { Box } from '@mui/material';
import { Checkbox } from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import React, { FC, ReactElement } from 'react';

interface ListHeadProps {
  order?: Order;
  orderBy?: string;
  columns: readonly IColumn[];
  visibleAction?: boolean;
  rowCount?: number;
  numSelected?: number;
  onSort?: (property: string) => void;
  onChangeChecked?: (isChangeCheckedAll: boolean, row?: any) => void;
}

export interface IColumn {
  title: string | ReactElement;
  field?: string;
  sort?: boolean;
  align?: 'left' | 'center' | 'right';
  render?: (row: any, index: number, data: any[]) => string | ReactElement | null | Promise<any>;
}

const ListHead: FC<ListHeadProps> = ({
  order,
  orderBy,
  onSort,
  columns,
  visibleAction = false,
  rowCount = 0,
  numSelected = 0,
  onChangeChecked
}) => {
  const handleCheckedAllChange = () => {
    if (onChangeChecked) onChangeChecked(true, []);
  };

  return (
    <S.Head>
      <S.Row>
        {columns.map(({ field, align, title, sort = true }, index) => {
          return (
            <S.Cell key={index} align={align || 'left'} sortDirection={orderBy === field ? order : false}>
              {field == 'check' ? (
                <Checkbox
                  indeterminate={numSelected > 0 && numSelected < rowCount}
                  checked={rowCount > 0 && numSelected == rowCount}
                  onChange={handleCheckedAllChange}
                />
              ) : (
                <S.SortLabel
                  active={orderBy === field}
                  direction={orderBy === field ? order : 'asc'}
                  onClick={field && onSort ? () => onSort(field) : undefined}
                  IconComponent={sort ? ExpandMore : () => <></>}
                  sx={{ flexDirection: 'unset' }}
                >
                  {title || ''}
                  {orderBy === field ? (
                    <Box component="span" sx={visuallyHidden}>
                      {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                    </Box>
                  ) : null}
                </S.SortLabel>
              )}
            </S.Cell>
          );
        })}
        {visibleAction && <S.Cell align="right">Actions</S.Cell>}
      </S.Row>
    </S.Head>
  );
};

export default ListHead;
