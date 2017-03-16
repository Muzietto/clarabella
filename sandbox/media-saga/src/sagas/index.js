import { fork } from 'redux-saga/effects';
import watchSearchMedia from './watcher';

export default function* startForeman() {
  yield fork(watchSearchMedia);
}