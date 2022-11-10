import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { TableHeadComponent } from './components/table/head/head.component';
import { TableThComponent } from './components/table/th/th.component';
import { TableCaptionComponent } from './components/table/caption/caption.component';
import { TableTrComponent } from './components/table/tr/tr.component';
import { TableTdComponent } from './components/table/td/td.component';
import { CountryEmojiComponent } from './components/country-emoji/country-emoji.component';

@NgModule({
  declarations: [
    TableComponent,
    TableCaptionComponent,
    TableHeadComponent,
    TableThComponent,
    TableTrComponent,
    TableTdComponent,
    CountryEmojiComponent,
  ],
  imports: [CommonModule],
  exports: [
    CommonModule,
    TableComponent,
    TableCaptionComponent,
    TableHeadComponent,
    TableThComponent,
    TableTrComponent,
    TableTdComponent,
    CountryEmojiComponent,
  ],
})
export class SharedModule {}
