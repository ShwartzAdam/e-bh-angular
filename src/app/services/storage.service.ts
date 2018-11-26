import {Injectable} from '@angular/core';


import data from './../data/files.json';


@Injectable({
  providedIn: 'root'
})
export class StorageService{
  fileTree = [];
  constructor() { }

  public getDataTree(){
    return data;
  }
  initLocalStorage(): Promise<any> {
      return new Promise((resolve,reject) => {
        if(this.sortData()) {
          resolve(this.fileTree);
        }
        reject(null);
      });
  }
  private sortData(): boolean {
    for(let i = 0 ; i < data.length ; i++ ){
      // if you are folder...
      if( data[i]['fileTypeId'] === 1 && data[i]['parentFileId'] === null ){
        // seek for files to create object
        this.attachFilesToFolder(data[i]['id'],data[i]['name']);
      }
    }
    // now go trough all folders and check weather it has a parent
    // naive soultion ----> it was a long night
    // filter only folders with parents id
    // let folders = data.filter(f => f['parentFileId'] !== null && f['fileTypeId'] === 1);
    // console.log(folders);
    // console.log(this.fileTree);
    // for (let k = 0 ; k < folders.length ; k++ ){
    //   for (let j = 0 ; j < this.fileTree.length ; j++ ){
    //       if(folders[k]['parentFileId'] === this.fileTree[])
    //   }
    // }
    return true;
  }
  private attachFilesToFolder(folderId,folderName): void {
    // init obj for folder with array for his files
    let folderObj = {
      id: folderId,
      name: folderName,
      children : []
    };
    // loop again.. yeah i know .. not the best practice
    for(let j = 0 ; j < data.length ; j++ ) {
      // if you are my childrens .. attach me to a new file object
      if( data[j]['parentFileId'] === folderId) {
        let file = {
          id: data[j]['id'],
          name: data[j]['name'],
          children: []
        };
        // push me to children array
        folderObj.children.push(file);
      }
    }
    // add me to a clean tree
    this.fileTree.push(folderObj);
  }


}
