import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { NbCardModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { EchartsComponent } from "./echarts.component"
import { EchartsBarComponent } from './echarts-bar.component';
import { from } from 'rxjs';


@NgModule({
    imports: [
        ThemeModule,
        NgxEchartsModule,
        NbCardModule,
    ],
    declarations: [EchartsComponent, EchartsBarComponent],
})
export class EchartsModule { }
