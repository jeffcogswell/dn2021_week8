import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PartListComponent } from './part-list/part-list.component';
import { PartFormComponent } from './part-form/part-form.component';
import { PartUpdateComponent } from './part-update/part-update.component';

const routes: Routes = [
	{ path: '', component: PartListComponent},
	{ path: 'add', component: PartFormComponent},
	{ path: 'edit', component: PartUpdateComponent}
]

@NgModule({
	declarations: [],
	imports: [
		RouterModule.forRoot(routes),
		CommonModule
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
