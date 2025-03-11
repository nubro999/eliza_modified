
import { CacheManager, Character, DbCacheAdapter, IDatabaseCacheAdapter } from "@elizaos/core";

export function initializeDbCache(
  character: Character,
  db: IDatabaseCacheAdapter
) {
  const cache = new CacheManager(new DbCacheAdapter(db, character.id));
  return cache;
}

//node 언어 배우기, WSL을 VS코드에 통합하기, node.js 설치하기, npm
//node.js는 자바스크립트 런타임 환경이다. 자바스크립트를 실행할 수 있는 환경을 제공한다.