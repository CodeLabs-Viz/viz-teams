import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../../models/person';
import { PersonParserService } from '../../services/person-parser.service';
import { Team } from '../../models/team';
import { PersonService } from '../../services/person.service';
import { TeamService } from '../../services/team.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent {
  @Input() people: Person[] = [];

  valid = '';
  validation = '';

  teams: Team[] = [];

  constructor(
    private personParserService: PersonParserService,
    private personService: PersonService,
    private teamService: TeamService,
    private router: Router,
  ) {
    this.teamService.getTeams().subscribe(t => this.getTeams(t));
  }

  onDrop(person: Person, team: Team) {
    person = new Person(person.id, person.firstName, person.lastName, person.position, person.teamName);
    this.personService.addToTeam(person, team);
  }

  getTeams(teams: Team[]): void {
    const theTeams: Team[] = [];
    for (const team of teams) {
      if (team.name !== '') {
        theTeams.push(team);
      }
    }
    this.teams = theTeams;
  }

  removeTeam(team: Team): void {
    if(confirm("This will permanently delete this team, are you sure?")){
      this.teamService.removeTeam(team);
    }
    
  }

  edit(person: Person): void {
    this.router.navigateByUrl('/edit/' + person.id);
  }

  checkExtension(val): void {
    const fileList = val.srcElement.files;
    const fileName = fileList[0].name.split('.');
    const extension = fileName[1];
    if (extension === 'csv') {
      this.valid = 'Valid';
      this.validation = 'green';
      if(confirm('Importing will delete current data. Are you sure?')){
        this.importCsv(val);
      (< HTMLInputElement > document.getElementById('srcfile')).value = null;
      }
      
    } else {
      this.valid = 'Invalid';
      this.validation = 'red';
    }
  }

  importCsv(val): void {
    const file = new Blob (val.srcElement.files);
    this.personParserService.parsecsv(file);
  }

  exportCsv(): void {
    this.personParserService.unparseIntoFile();
  }

  templateCsv(): void {
    const fileText = 'Firstname, Lastname, Position, Team' + '\n';
    this.downloadTemplate(fileText);
  }

  openUpload(): void {
    if (this.detectIE()) {
      document.getElementById('srcfile').click();
    }
  }

  detectIE(): any {
    const ua = window.navigator.userAgent;

    const msie = ua.indexOf('MSIE ');
    if (msie > 0) {
      // IE 10 or older => return version number
      return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    const trident = ua.indexOf('Trident/');
    if (trident > 0) {
      // IE 11 => return version number
      const rv = ua.indexOf('rv:');
      return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    const edge = ua.indexOf('Edge/');
    if (edge > 0) {
      // Edge (IE 12+) => return version number
      return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
  }

  downloadTemplate(data: any) {
    const blob = new Blob([data], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.download = 'VizTeamsTemplate.csv';
    anchor.href = url;
    anchor.click();
  }
}
