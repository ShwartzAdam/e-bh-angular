import { Component, OnInit } from '@angular/core';
import {StorageService} from "../services/storage.service";
import {ITreeOptions } from 'angular-tree-component';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  filename;
  dateObj;
  chmod = [
    0 , 0, 0
  ];
  isClicked = false;
  node = [];
  options: ITreeOptions = {
    actionMapping: {
      mouse: {
        click: (tree, node) => {
          const data =this.storage.getDataTree();
          let f = data.filter(f => f['id'] === node.data['id']);
          this.filename = f[0]['name'];
          this.dateObj = f[0]['createdAt'];
          this.chmod = f[0]['chmod'].toString().match(/\d{1,1}/g);
        }

      }
    }
  };

  constructor(private storage : StorageService) { }

  ngOnInit() {
    // init local storage
    this.storage.initLocalStorage().then(response => this.node = response)
  }


}
