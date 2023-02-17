import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroUserSolid, heroUsersSolid } from '@ng-icons/heroicons/solid';

@Component({
  standalone: true,
  selector: 'app-standings-nav',
  imports: [RouterModule, NgIconComponent],
  viewProviders: [provideIcons({ heroUserSolid, heroUsersSolid })],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {}
