////////////////////////////////////////////////////////////////
//
// THIS FILE IS PART OF DELTA MONITOR
// (c) 2017 C4ISR https://delta.istar.org.ua/
// DO NOT USE, MODIFY OR DISTRIBUTE WITHOUT PERMISSION OF OWNER!
// SEE LICENSE.TXT FOR DETAILS
// Created by LUKASHENKO YEVHENII on 10.02.2018.
//
////////////////////////////////////////////////////////////////
import ms from 'milsymbol';


export default class SymbolGenerator {

    static createSymbol(appCode = "sfgpewrh--mt"){
      return new ms.Symbol("sfgpewrh--mt", {
        size: 35,
        quantity: 200,
        staffComments: "for reinforcements".toUpperCase(),
        additionalInformation: "added support for JJ".toUpperCase(),
        direction: (750*360/6400),
        type: "machine gun".toUpperCase(),
        dtg: "30140000ZSEP97",
        location: "0900000.0E570306.0N"
      }).toDataURL();
    }

}
