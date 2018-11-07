'use strict';

import { JsonProperty } from '@hubcarl/json-typescript-mapper';

export default class Article {
  @JsonProperty('id')
  public id?: string;
  @JsonProperty('title')
  public title?: string;
  @JsonProperty('summary')
  public summary?: string;
  @JsonProperty('categoryId')
  public categoryId?: number;
  @JsonProperty('tag')
  public tag?: string ;
  @JsonProperty('categoryId')
  public authorId?: number;
  @JsonProperty('createTime')
  public createTime?: number;
  @JsonProperty('hits')
  public hits?: number;
  @JsonProperty('url')
  public url?: string;
  @JsonProperty('status')
  public status?: number;
  @JsonProperty('content')
  public content?: string;

  // constructor must be init everyone JsonProperty
  constructor() {
    this.id = '';
    this.title = '';
    this.summary = '';
    this.categoryId = -1;
    this.tag = '';
    this.authorId = -1;
    this.url = '';
    this.status = 0;
    this.hits = 0;
    this.content = '';
    this.createTime = Date.now();
  }
}