import React from 'react';
import { Toolbar, GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page } from '@syncfusion/ej2-react-grids';
import { DataData, DataGrid } from '../data/dummy';
import { Header } from '../components';

const DataControl = () => {
  const toolbarOptions = ['Search'];

  const editing = { allowDeleting: true, allowEditing: true };

  // Custom renderer for the Link column
  const linkTemplate = (props) => {
    return <a href={props.Link} target="_blank" rel="noopener noreferrer">{props.Link}</a>;
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Data Control" />
      <GridComponent
        dataSource={DataData}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        editSettings={editing}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          {/* Mapping through DataGrid and rendering columns */}
          {DataGrid.map((item, index) => {
            // Checking if the column is for Link
            if (item.field === 'Link') {
              return (
                <ColumnDirective key={index} {...item} template={linkTemplate} />
              );
            }
            return <ColumnDirective key={index} {...item} />;
          })}
        </ColumnsDirective>
        <Inject services={[Toolbar, Search, Page]} />
      </GridComponent>
    </div>
  );
};

export default DataControl;
