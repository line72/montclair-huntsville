/* -*- Mode: rjsx -*- */

/*******************************************
 * Copyright (2018)
 *  Marcus Dillavou <line72@line72.net>
 *  http://line72.net
 *
 * Montclair:
 *  https://github.com/line72/montclair
 *  https://montclair.line72.net
 *
 * Licensed Under the GPLv3
 *******************************************/

import RouteShout2Parser from './RouteShout2Parser';

class Configuration {
    constructor() {
        // Huntsville, AL
        this.center = [34.730317, -86.585925];
        this.tileserver = {
            url: 'https://huntsville.gotransitapp.com/tiles/{z}/{x}/{y}.png',
            subdomains: ''
        };
        this.agencies = [
            {
                name: 'Routes',
                parser: new RouteShout2Parser('https://huntsville.gotransitapp.com/api/no.php/routeshout/api/v2.0',
                                              1, 'RouteShoutAPIAdapterv2.0')
            }
        ];
    }
}

export default Configuration;
