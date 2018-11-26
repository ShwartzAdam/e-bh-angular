import {Injectable} from '@angular/core';

import data from './../data/files.json';



@Injectable({
  providedIn: 'root'
})
export class StorageService {
  fileTree = [];
  constructor() { }

  public getFlatJson(){
    return data;
  }
  initLocalStorage(): Promise<any> {
      return new Promise((resolve) => {
        var tree = this.listToTree(data, {
          idKey: 'id',
          parentKey: 'parentFileId',
          childrenKey: 'children'
        });
        resolve(tree);
      });
  }

  listToTree(data, options) {
    options = options || {};
    let ID_KEY = options.idKey || 'id';
    let PARENT_KEY = options.parentKey || 'parent';
    let CHILDREN_KEY = options.childrenKey || 'children';

    let tree = [],
      childrenOf = {};
    let item, id, parentId;

    for (let i = 0, length = data.length; i < length; i++) {
      item = data[i];
      id = item[ID_KEY];
      parentId = item[PARENT_KEY] || 0;
      // every item may have children
      childrenOf[id] = childrenOf[id] || [];
      // init its children
      item[CHILDREN_KEY] = childrenOf[id];
      if (parentId != 0) {
        // init its parent's children object
        childrenOf[parentId] = childrenOf[parentId] || [];
        // push it into its parent's children object
        childrenOf[parentId].push(item);
      } else {
        tree.push(item);
      }
    };

    return tree;
  }



}
