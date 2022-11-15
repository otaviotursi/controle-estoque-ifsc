import { AfterViewInit, Component, ViewChild, OnInit, Inject } from '@angular/core';
import { Location } from '@angular/common';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { EstoqueService } from '../estoque.service';
import { Estoque } from 'src/app/Models/Estoque';

@Component({
  selector: 'app-ConsultarEstoque',
  templateUrl: './ConsultarEstoque.component.html',
  styleUrls: ['./ConsultarEstoque.component.scss']
})
export class ConsultarEstoqueComponent implements OnInit {

  titulo = "Lista de Estoques";
  displayedColumns: string[] = ['id', 'nome_produto', 'valor', 'quantidade', 'valor', 'valor_em_estoque', 'Gerenciar'];
  dataListaEstoque!: MatTableDataSource<Estoque>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  idSelecionado:number = 0;

  constructor(private estoqueService: EstoqueService, private location: Location, public dialog: MatDialog) { }
  
  ngAfterViewInit() {
  }

  ngOnInit(): void {
    this.SelecionarEstoque();
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataListaEstoque.filter = filterValue.trim().toLowerCase();

    if (this.dataListaEstoque.paginator) {
      this.dataListaEstoque.paginator.firstPage();
    }
  }

  SelecionarEstoque(): void{
    this.estoqueService.SelecionarTodoEstoque().subscribe( data => {
      console.log(data);
      this.dataListaEstoque = new MatTableDataSource(data);
      this.dataListaEstoque.sort = this.sort;
      this.dataListaEstoque.paginator = this.paginator;
    }
    );
  }
  InserirEstoque():void{
    // const dialogRef = this.dialog.open(InserirEstoqueDialog, {
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.SelecionarEstoque();
    // });
  }
  AlterarEstoque(id?: number):void{
    // console.log('AlterarEstoque', id);
    // var item = id == null || undefined ? this.idSelecionado : id; 
    // console.log('item', item);
    
    // const dialogRef = this.dialog.open(AlterarEstoqueDialog, {
    //   data: item,
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.SelecionarEstoque();
    // });
  }
  ExcluirEstoque(id?: number):void{
    // var item = id == null || undefined  ? this.idSelecionado : id; 
    // console.log('item', item);
    // const dialogRef = this.dialog.open(ExcluirEstoqueDialog, {
    //   data: item,
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.SelecionarEstoque();
    // });
  }
  
  VoltarPagina(): void {
    this.location.back();
  }


}

// @Component({
//   selector: 'inserir-estoque-dialog',
//   templateUrl: 'inserir-estoque-dialog.html',
// })
// export class InserirEstoqueDialog {
//   constructor(
//     public dialogRef: MatDialogRef<InserirEstoqueDialog>,
//   ) {}

//   onNoClick(): void {
//     this.dialogRef.close();
//   }
// }

// @Component({
//   selector: 'alterar-estoque-dialog',
//   templateUrl: 'alterar-estoque-dialog.html',
// })
// export class AlterarEstoqueDialog {
//   constructor(
//     public dialogRef: MatDialogRef<AlterarEstoqueDialog>,
//     @Inject(MAT_DIALOG_DATA) public data: number,
//   ) {}

//   onNoClick(): void {
//     this.dialogRef.close();
//   }
// }

// @Component({
//   selector: 'excluir-estoque-dialog',
//   templateUrl: 'excluir-estoque-dialog.html',
// })
// export class ExcluirEstoqueDialog {
//   constructor(
//     public dialogRef: MatDialogRef<ExcluirEstoqueDialog>,
//     @Inject(MAT_DIALOG_DATA) public data: number,
//   ) {}

//   onNoClick(): void {
//     this.dialogRef.close();
//   }
// }