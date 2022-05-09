import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/service/authentication.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  title = 'My first AGM project';
  lat = -55.174006;
  lng = -22.521971;

  paths = [
    { lng: -55.174006, lat: -22.521971 }, { lng: -55.172915, lat: -22.521926 }, { lng: -55.176745, lat: -22.526962 }, { lng: -55.177699, lat: -22.526843 }, { lng: -55.174006, lat: -22.521971 }
    ]

  poligonos = [
    [{ lng: -55.174006, lat: -22.521971 }, { lng: -55.172915, lat: -22.521926 }, { lng: -55.176745, lat: -22.526962 }, { lng: -55.177699, lat: -22.526843 }, { lng: -55.174006, lat: -22.521971 },],  
    [{ lng: -55.210091, lat: -22.580546 }, { lng: -55.210307, lat: -22.581711 }, { lng: -55.212616, lat: -22.579953 }, { lng: -55.211902, lat: -22.579249 }, { lng: -55.211036, lat: -22.579869 }, { lng: -55.210836, lat: -22.580012 }, { lng: -55.210091, lat: -22.580546 },],
    [{ lng: -55.174006, lat: -22.521971 }, { lng: -55.172915, lat: -22.521926 }, { lng: -55.176745, lat: -22.526962 }, { lng: -55.177699, lat: -22.526843 }, { lng: -55.174006, lat: -22.521971 },],
    [{ lng: -55.103816, lat: -22.677467 }, { lng: -55.098099, lat: -22.679507 }, { lng: -55.099779, lat: -22.683067 }, { lng: -55.106034, lat: -22.681593 }, { lng: -55.103816, lat: -22.677467 },],
    [{ lng: -55.221472, lat: -22.603849 }, { lng: -55.224900, lat: -22.604549 }, { lng: -55.224927, lat: -22.603897 }, { lng: -55.221565, lat: -22.603193 }, { lng: -55.221472, lat: -22.603849 },],
    [{ lng: -55.205727, lat: -22.828702 }, { lng: -55.205573, lat: -22.830808 }, { lng: -55.213519, lat: -22.832436 }, { lng: -55.213650, lat: -22.829523 }, { lng: -55.205727, lat: -22.828702 },],
    [{ lng: -55.210091, lat: -22.580546 }, { lng: -55.210307, lat: -22.581711 }, { lng: -55.212616, lat: -22.579953 }, { lng: -55.211902, lat: -22.579249 }, { lng: -55.211036, lat: -22.579869 }, { lng: -55.210836, lat: -22.580012 }, { lng: -55.210091, lat: -22.580546 },],
    [{ lng: -54.901287, lat: -22.880380 }, { lng: -54.901358, lat: -22.877876 }, { lng: -54.896189, lat: -22.878935 }, { lng: -54.896093, lat: -22.881346 }, { lng: -54.901287, lat: -22.880380 },],
    [{ lng: -55.127284, lat: -22.525317 }, { lng: -55.129442, lat: -22.527314 }, { lng: -55.133654, lat: -22.523308 }, { lng: -55.131492, lat: -22.521306 }, { lng: -55.131465, lat: -22.521282 }, { lng: -55.127284, lat: -22.525317 },],
    [{ lng: -55.131465, lat: -22.521282 }, { lng: -55.131492, lat: -22.521306 }, { lng: -55.133654, lat: -22.523308 }, { lng: -55.136207, lat: -22.520880 }, { lng: -55.134041, lat: -22.518796 }, { lng: -55.131465, lat: -22.521282 },],
    [{ lng: -55.279153, lat: -22.499195 }, { lng: -55.279811, lat: -22.501523 }, { lng: -55.280061, lat: -22.502406 }, { lng: -55.282453, lat: -22.502282 }, { lng: -55.281718, lat: -22.499063 }, { lng: -55.279153, lat: -22.499195 },],
    [{ lng: -55.184732, lat: -22.734371 }, { lng: -55.184072, lat: -22.732645 }, { lng: -55.173066, lat: -22.737257 }, { lng: -55.173647, lat: -22.739002 }, { lng: -55.184732, lat: -22.734371 },],
    [{ lng: -55.037145, lat: -22.378415 }, { lng: -55.036522, lat: -22.380121 }, { lng: -55.039873, lat: -22.379877 }, { lng: -55.040967, lat: -22.379801 }, { lng: -55.040986, lat: -22.377552 }, { lng: -55.037145, lat: -22.378415 },],
    [{ lng: -55.228134, lat: -22.607023 }, { lng: -55.224874, lat: -22.606413 }, { lng: -55.224864, lat: -22.607081 }, { lng: -55.228092, lat: -22.607732 }, { lng: -55.228134, lat: -22.607023 },],
    [{ lng: -55.205164, lat: -22.786697 }, { lng: -55.203304, lat: -22.787543 }, { lng: -55.201170, lat: -22.787395 }, { lng: -55.201272, lat: -22.788783 }, { lng: -55.203091, lat: -22.788729 }, { lng: -55.205416, lat: -22.788558 }, { lng: -55.205164, lat: -22.786697 },],
    [{ lng: -55.161561, lat: -22.544107 }, { lng: -55.163287, lat: -22.542457 }, { lng: -55.160571, lat: -22.539927 }, { lng: -55.158887, lat: -22.541615 }, { lng: -55.161561, lat: -22.544107 },],
    [{ lng: -55.273784, lat: -22.555583 }, { lng: -55.273084, lat: -22.560625 }, { lng: -55.273084, lat: -22.560734 }, { lng: -55.282141, lat: -22.558997 }, { lng: -55.273784, lat: -22.555583 },],
    [{ lng: -55.281726, lat: -22.565535 }, { lng: -55.273104, lat: -22.567111 }, { lng: -55.273113, lat: -22.569782 }, { lng: -55.281519, lat: -22.568245 }, { lng: -55.281726, lat: -22.565535 },],
    [{ lng: -55.282141, lat: -22.558997 }, { lng: -55.273084, lat: -22.560734 }, { lng: -55.273086, lat: -22.561323 }, { lng: -55.282112, lat: -22.559672 }, { lng: -55.282141, lat: -22.558997 },],
    [{ lng: -55.214904, lat: -22.601612 }, { lng: -55.209662, lat: -22.601086 }, { lng: -55.209366, lat: -22.603755 }, { lng: -55.211683, lat: -22.604246 }, { lng: -55.214946, lat: -22.604735 }, { lng: -55.214904, lat: -22.601612 },],
    [{ lng: -55.214711, lat: -22.594787 }, { lng: -55.210406, lat: -22.594320 }, { lng: -55.210044, lat: -22.597722 }, { lng: -55.213142, lat: -22.598252 }, { lng: -55.214758, lat: -22.598411 }, { lng: -55.214711, lat: -22.594787 },],
    [{ lng: -55.228167, lat: -22.788069 }, { lng: -55.228536, lat: -22.787336 }, { lng: -55.228831, lat: -22.784080 }, { lng: -55.225179, lat: -22.787028 }, { lng: -55.221757, lat: -22.788752 }, { lng: -55.221953, lat: -22.789632 }, { lng: -55.228167, lat: -22.788069 },],
    [{ lng: -55.221332, lat: -22.764423 }, { lng: -55.219431, lat: -22.766184 }, { lng: -55.221611, lat: -22.769164 }, { lng: -55.226697, lat: -22.770307 }, { lng: -55.229768, lat: -22.771049 }, { lng: -55.229915, lat: -22.768443 }, { lng: -55.221332, lat: -22.764423 },],
    [{ lng: -55.205778, lat: -22.621556 }, { lng: -55.205068, lat: -22.624841 }, { lng: -55.204682, lat: -22.626624 }, { lng: -55.206952, lat: -22.625423 }, { lng: -55.209839, lat: -22.623764 }, { lng: -55.209606, lat: -22.622888 }, { lng: -55.205778, lat: -22.621556 },],
    [{ lng: -55.202222, lat: -22.618927 }, { lng: -55.199324, lat: -22.624231 }, { lng: -55.201695, lat: -22.625994 }, { lng: -55.202391, lat: -22.624343 }, { lng: -55.204090, lat: -22.620316 }, { lng: -55.202222, lat: -22.618927 },],
    [{ lng: -55.210925, lat: -22.612409 }, { lng: -55.210895, lat: -22.612450 }, { lng: -55.208588, lat: -22.615697 }, { lng: -55.207849, lat: -22.616281 }, { lng: -55.208533, lat: -22.618850 }, { lng: -55.212854, lat: -22.612799 }, { lng: -55.210925, lat: -22.612409 },],
    [{ lng: -55.155968, lat: -22.555559 }, { lng: -55.156306, lat: -22.556375 }, { lng: -55.156556, lat: -22.556285 }, { lng: -55.156229, lat: -22.555445 }, { lng: -55.155968, lat: -22.555559 },],
    [{ lng: -55.197713, lat: -22.788128 }, { lng: -55.197771, lat: -22.788976 }, { lng: -55.198146, lat: -22.788956 }, { lng: -55.201305, lat: -22.788787 }, { lng: -55.201196, lat: -22.787386 }, { lng: -55.197643, lat: -22.787110 }, { lng: -55.197713, lat: -22.788128 },],
    [{ lng: -55.281519, lat: -22.568245 }, { lng: -55.273110, lat: -22.569783 }, { lng: -55.273114, lat: -22.570946 }, { lng: -55.281424, lat: -22.569426 }, { lng: -55.281434, lat: -22.569363 }, { lng: -55.281519, lat: -22.568245 },],
    [{ lng: -55.052518, lat: -22.423941 }, { lng: -55.049229, lat: -22.425555 }, { lng: -55.049509, lat: -22.426055 }, { lng: -55.052814, lat: -22.424432 }, { lng: -55.052850, lat: -22.424415 }, { lng: -55.052559, lat: -22.423921 }, { lng: -55.052518, lat: -22.423941 },],
    [{ lng: -55.192301, lat: -22.787659 }, { lng: -55.188189, lat: -22.788178 }, { lng: -55.188475, lat: -22.789346 }, { lng: -55.192424, lat: -22.789175 }, { lng: -55.192301, lat: -22.787659 },],
    [{ lng: -55.266469, lat: -22.552839 }, { lng: -55.265874, lat: -22.562333 }, { lng: -55.273209, lat: -22.560488 }, { lng: -55.273776, lat: -22.555564 }, { lng: -55.266469, lat: -22.552839 },],
    [{ lng: -55.225377, lat: -22.605749 }, { lng: -55.228140, lat: -22.606308 }, { lng: -55.228190, lat: -22.605600 }, { lng: -55.224917, lat: -22.604964 }, { lng: -55.224861, lat: -22.605645 }, { lng: -55.225014, lat: -22.605676 }, { lng: -55.225377, lat: -22.605749 },],
    [{ lng: -55.190062, lat: -22.508372 }, { lng: -55.191136, lat: -22.512021 }, { lng: -55.192024, lat: -22.511053 }, { lng: -55.191443, lat: -22.507964 }, { lng: -55.190062, lat: -22.508372 },],
    [{ lng: -55.188992, lat: -22.508697 }, { lng: -55.190336, lat: -22.512892 }, { lng: -55.191136, lat: -22.512021 }, { lng: -55.190062, lat: -22.508373 }, { lng: -55.188992, lat: -22.508697 },],
    [{ lng: -55.280075, lat: -22.502384 }, { lng: -55.282050, lat: -22.509387 }, { lng: -55.284220, lat: -22.509743 }, { lng: -55.282506, lat: -22.502281 }, { lng: -55.280075, lat: -22.502384 },],
    [{ lng: -55.151818, lat: -22.549645 }, { lng: -55.151746, lat: -22.549705 }, { lng: -55.151818, lat: -22.549881 }, { lng: -55.152474, lat: -22.551491 }, { lng: -55.153984, lat: -22.551093 }, { lng: -55.152905, lat: -22.548739 }, { lng: -55.151818, lat: -22.549645 },],
    [{ lng: -55.065230, lat: -22.457181 }, { lng: -55.065175, lat: -22.458612 }, { lng: -55.070714, lat: -22.459982 }, { lng: -55.071071, lat: -22.458982 }, { lng: -55.065230, lat: -22.457181 },],
    [{ lng: -55.138831, lat: -22.555800 }, { lng: -55.141310, lat: -22.557859 }, { lng: -55.142453, lat: -22.556425 }, { lng: -55.140389, lat: -22.554503 }, { lng: -55.138831, lat: -22.555800 },],
    [{ lng: -55.221033, lat: -22.607602 }, { lng: -55.224748, lat: -22.608368 }, { lng: -55.224764, lat: -22.607742 }, { lng: -55.221082, lat: -22.607027 }, { lng: -55.221033, lat: -22.607602 },],
    [{ lng: -55.220841, lat: -22.609393 }, { lng: -55.224666, lat: -22.610004 }, { lng: -55.224671, lat: -22.609566 }, { lng: -55.222891, lat: -22.609203 }, { lng: -55.220914, lat: -22.608792 }, { lng: -55.220841, lat: -22.609393 },],
    [{ lng: -55.049234, lat: -22.425561 }, { lng: -55.049509, lat: -22.426054 }, { lng: -55.052865, lat: -22.424406 }, { lng: -55.052564, lat: -22.423926 }, { lng: -55.049234, lat: -22.425561 },],
    [{ lng: -55.218413, lat: -22.543426 }, { lng: -55.223955, lat: -22.546548 }, { lng: -55.226381, lat: -22.548047 }, { lng: -55.229201, lat: -22.542248 }, { lng: -55.219007, lat: -22.539655 }, { lng: -55.218413, lat: -22.543426 },],
    [{ lng: -55.097071, lat: -22.682952 }, { lng: -55.091342, lat: -22.685346 }, { lng: -55.091860, lat: -22.687642 }, { lng: -55.095341, lat: -22.687764 }, { lng: -55.098296, lat: -22.686366 }, { lng: -55.097071, lat: -22.682952 },],
    [{ lng: -55.177816, lat: -22.504387 }, { lng: -55.177256, lat: -22.511281 }, { lng: -55.185816, lat: -22.513301 }, { lng: -55.183064, lat: -22.506035 }, { lng: -55.177816, lat: -22.504387 },],
    [{ lng: -55.177256, lat: -22.511281 }, { lng: -55.176984, lat: -22.514627 }, { lng: -55.187477, lat: -22.517686 }, { lng: -55.185816, lat: -22.513301 }, { lng: -55.177256, lat: -22.511281 },],
    ];

  constructor(private _authentication : AuthenticationService, private router: Router) { }

  ngOnInit(): void {

  };

  cadastrar(){
    this.router.navigate(['/usuario']);

  }

  cadastrarPerfil(){
    this.router.navigate(['/perfil']);

  }

  dashboard(){
    this.router.navigate(['/dashboard']);

  }

}