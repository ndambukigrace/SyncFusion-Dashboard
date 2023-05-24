import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Search, Sort, ContextMenu, Filter, Page,
  ExcelExport, PdfExport, Edit, Inject ,Toolbar , Selection} from '@syncfusion/ej2-react-grids'


import { customersData, customersGrid } from '../data/dummy'
import { Header } from '../components'

const Customer = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      < Header category='Page' title='Customers'/>

      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={['Search', 'Delete']}
        editSettings={{ allowEditing: true, allowDelete: true }}
        width='auto'
      >
        <ColumnsDirective>
          {customersGrid.map(( item, index ) => (
            <ColumnDirective key={index} {...item}/>
          ))}
        </ColumnsDirective>
        <Inject services={[ Selection, Resize, Search, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Toolbar]}/>
      </GridComponent>

    </div>
  )
}

export default Customer