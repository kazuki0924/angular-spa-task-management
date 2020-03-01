import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbInputModule, NbCardModule, NbFormFieldModule, NbIconModule, NbButtonModule } from '@nebular/theme';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbInputModule,
    NbCardModule,
    NbFormFieldModule,
    NbIconModule,
    NbButtonModule
  ],
  exports: [NbInputModule, NbCardModule, NbFormFieldModule, NbIconModule, NbButtonModule]
})
export class SharedModule { }
