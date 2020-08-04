import { BitConfigService } from '../common/bit-config.service';
import { BitConfig } from '../types/bit-config';

export function factoryBitConfig(config: BitConfig) {
  const service = new BitConfigService();
  service.url = config.url;
  service.api = config.api;
  service.col = config.col;
  service.locale = config.locale;
  service.i18n = config.i18n;
  service.page = config.page;
  return service;
}
