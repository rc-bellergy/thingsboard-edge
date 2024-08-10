///
/// Copyright © 2016-2024 The Thingsboard Authors
///
/// Licensed under the Apache License, Version 2.0 (the "License");
/// you may not use this file except in compliance with the License.
/// You may obtain a copy of the License at
///
///     http://www.apache.org/licenses/LICENSE-2.0
///
/// Unless required by applicable law or agreed to in writing, software
/// distributed under the License is distributed on an "AS IS" BASIS,
/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
/// See the License for the specific language governing permissions and
/// limitations under the License.
///

import { Pipe, PipeTransform } from '@angular/core';
import {
  MappingValueType,
  OPCUaSourceTypes,
  SourceTypes
} from '@home/components/widget/lib/gateway/gateway-widget.models';

@Pipe({
  name: 'getGatewayHelpLink',
  standalone: true,
})
export class GatewayHelpLinkPipe implements PipeTransform {
  transform(field: string, sourceType: SourceTypes | OPCUaSourceTypes, sourceTypes?: Array<SourceTypes | OPCUaSourceTypes | MappingValueType> ): string {
    if (!sourceTypes || sourceTypes?.includes(OPCUaSourceTypes.PATH)) {
      if (sourceType !== OPCUaSourceTypes.CONST) {
        return `widget/lib/gateway/${field}-${sourceType}_fn`;
      } else {
        return;
      }
    }
    return 'widget/lib/gateway/expressions_fn';
  }
}
