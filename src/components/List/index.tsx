import { PAGE_LIMIT } from '../../constants';
import { Order } from '../../interfaces';
import { Modal } from '../Modal';
import { DesktopList } from './Desktop';
import { IColumn } from './Head';
import { MobileList } from './MobileTable';
import ListToolbar from './Toolbar';
import * as S from './styles';
import { useTheme, useMediaQuery, Typography } from '@mui/material';
import React, { useMemo, useState } from 'react';

interface ITableProps {
  title?: string;
  data: any[];
  columns: IColumn[];
  pageLimit?: number;
  isLoading?: boolean;
  isMobileDisabled?: boolean;
  totalPage?: number;
  pageNumber?: number;
  onPageChange?: (page: number) => void;
  order?: Order;
  orderBy?: string;
  onSort?: (property: string) => void;
  onNew?: () => void;
  onCopy?: (id: number) => void;
  onEdit?: (id: number) => void;
  onView?: (id: number, tokenId?: string) => void;
  onDelete?: (id: number) => void;
  onArchive?: (e: React.MouseEvent<HTMLElement>, row: any) => void;
  onFavorite?: (e: React.MouseEvent<HTMLElement>, row: any) => void;
  selectedRows?: any[];
  numSelected?: number;
  onRowClick?: (id: number) => void;
  OnChangeChecked?: (isChangeCheckedAll: boolean, row?: any) => void;
}

export const List = ({
  title,
  data = [],
  columns,
  pageLimit = PAGE_LIMIT,
  pageNumber = 0,
  totalPage = 0,
  onPageChange,
  order,
  orderBy,
  isLoading = false,
  isMobileDisabled = false,
  onNew,
  onCopy,
  onSort,
  onEdit,
  onView,
  onDelete,
  onArchive,
  onFavorite,
  selectedRows = [],
  numSelected,
  onRowClick,
  OnChangeChecked
}: ITableProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [openDelete, setOpenDelete] = useState<number | null>(null);

  const handlePageChange = (event: unknown, newPage: number) => {
    if (onPageChange) {
      onPageChange(newPage - 1);
    }
  };

  const isVisiblePagination = useMemo(
    () => !isLoading && data.length > 0 && onPageChange && totalPage / PAGE_LIMIT > 1,
    [isLoading, data, onPageChange]
  );

  const emptyRows = useMemo(() => {
    const length = title ? totalPage : data.length;
    return Math.max(0, (1 + pageNumber) * pageLimit - length);
  }, [pageNumber, totalPage, data]);

  const colSpan = useMemo(() => {
    if (onView || onEdit || onDelete) {
      return columns.length + 1;
    } else {
      return columns.length;
    }
  }, [columns]);

  const handleCancelDelete = () => {
    setOpenDelete(null);
  };

  const handleOkDelete = () => {
    setOpenDelete(null);
    onDelete && onDelete(openDelete as number);
  };

  const handleOpenDelete = (id: number) => {
    setOpenDelete(id);
  };

  return (
    <S.Container>
      <S.Card>
        <ListToolbar isLoading={isLoading} title={title} onNew={onNew} />
        {!isMobileDisabled && isMobile ? (
          <MobileList
            title={title}
            data={data}
            columns={columns}
            pageLimit={pageLimit}
            pageNumber={pageNumber}
            totalPage={totalPage}
            onPageChange={onPageChange}
            isLoading={isLoading}
            onNew={onNew}
            onDelete={handleOpenDelete}
            onEdit={onEdit}
            onView={onView}
            onArchive={onArchive}
            onFavorite={onFavorite}
            selectedRows={selectedRows}
            numSelected={numSelected}
            onRowClick={onRowClick}
            OnChangeChecked={OnChangeChecked}
          />
        ) : (
          <DesktopList
            data={data}
            order={order}
            colSpan={colSpan}
            orderBy={orderBy}
            columns={columns}
            pageLimit={pageLimit}
            numSelected={numSelected}
            isLoading={isLoading}
            selectedRows={selectedRows}
            emptyRows={emptyRows}
            onChangeChecked={OnChangeChecked}
            onSort={onSort}
            onCopy={onCopy}
            onEdit={onEdit}
            onView={onView}
            onDelete={handleOpenDelete}
            onRowClick={onRowClick}
          />
        )}
      </S.Card>
      {isVisiblePagination && (
        <S.Pagination count={Math.ceil(totalPage / pageLimit)} page={pageNumber + 1} onChange={handlePageChange} />
      )}

      <Modal
        title="Delete"
        okText="Delete"
        onOk={handleOkDelete}
        onCancel={handleCancelDelete}
        open={!!openDelete}
        onClose={handleCancelDelete}
      >
        <Typography align="center">Are you sure to delete?</Typography>
      </Modal>
    </S.Container>
  );
};

export * from './Head';
