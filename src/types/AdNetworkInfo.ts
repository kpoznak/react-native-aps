/*
 * Copyright (c) 2022-present Adversport & Contributors
 *
 * This file is part of react-native-aps.
 *
 * react-native-aps is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as
 * published by the Free Software Foundation, version 3 of the License.
 *
 * react-native-aps is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with Foobar. If not, see <https://www.gnu.org/licenses/>.
 */

export const AdNetwork = Object.freeze({
  GOOGLE_AD_MANAGER: 'GOOGLE_AD_MANAGER',
  ADMOB: 'ADMOB',
  AD_GENERATION: 'AD_GENERATION',
  IRON_SOURCE: 'IRON_SOURCE',
  MAX: 'MAX',
  NIMBUS: 'NIMBUS',
  OTHER: 'OTHER',
} as const);

/**
 * @public
 */
export type AdNetwork = 'GOOGLE_AD_MANAGER' | 'ADMOB' | 'AD_GENERATION' | 'IRON_SOURCE' | 'MAX' | 'NIMBUS' | 'OTHER';

/**
 * @internal
 */
export function isAdNetwork(value: any): value is AdNetwork {
  return Object.values(AdNetwork).includes(value);
}
/**
 * @public
 */
export interface AdNetworkInfo {
  /**
   * The name of the primary ad server or mediator
   */
  adNetwork: AdNetwork;
  adNetworkProperties?: { [key: string]: string };
}

/**
 * @internal
 */
export function validateAdNetworkInfo(adNetworkInfo: AdNetworkInfo) {
  if (typeof adNetworkInfo !== 'object') {
    throw new Error("'adNetworkInfo' expected an object value");
  }
  if (!isAdNetwork(adNetworkInfo.adNetwork)) {
    throw new Error(
      "'adNetworkInfo.adNetwork' expected one of AdNetwork values"
    );
  }
  if (
    adNetworkInfo.adNetworkProperties &&
    typeof adNetworkInfo.adNetworkProperties !== 'object'
  ) {
    throw new Error(
      "'adNetworkInfo.adNetworkProperties' expected an object value"
    );
  }
}
