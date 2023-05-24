import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Search, Sort, ContextMenu, Filter, Page,
  ExcelExport, PdfExport, Edit, Inject ,Toolbar } from '@syncfusion/ej2-react-grids'

import { employeesData, employeesGrid } from '../data/dummy'
import { Header } from '../components'

const Employee = () => {
  return (
    <div className="m-0.5 md:m-5 p-1.5 md:p-5 bg-white rounded-3xl">
      < Header category='Page' title='Employees'/>

      <GridComponent
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={['Search']}
        width='auto'
      >
        <ColumnsDirective>
          {employeesGrid.map(( item, index ) => (
            <ColumnDirective key={index} {...item}/>
          ))}
        </ColumnsDirective>
        <Inject services={[  Resize, Search, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Toolbar]}/>
      </GridComponent>

    </div>
  )
}

export default Employee