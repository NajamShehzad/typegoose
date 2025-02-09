import { allVirtualoptions } from './utils';

export class InvalidTypeError extends Error {
  constructor(targetName: string, key: string, Type: unknown) {
    super(`"${targetName}.${key}"'s Type is invalid! Type is: "${Type}" [E009]`);
  }
}

export class NotNumberTypeError extends Error {
  constructor(targetName: string, key: string, enumKey: string, enumValue: string) {
    super(
      `Typeof "${targetName}.${key}" is "Number", value is undefined/null or does not have a reverse mapping! [E011]\n` +
        `  Encountered with property: "${enumKey}.${typeof enumValue}"`
    );
  }
}

export class NotStringTypeError extends Error {
  constructor(targetName: string, key: string, enumKey: string, enumValue: string) {
    super(
      `Typeof "${targetName}.${key}" is "String", used enum is not only Strings! [E010]\n` +
        `  Encountered with property in Enum: "${enumKey}.${typeof enumValue}"`
    );
  }
}

/** Not All Virtual Populate Elements Error */
export class NotAllVPOPElementsError extends Error {
  constructor(name: string, key: string) {
    super(`"${name}.${key}" has not all needed Virtual Populate Options! Needed are: ${allVirtualoptions.join(', ')} [E006]`);
  }
}

export class NoValidClassError extends TypeError {
  constructor(cl: unknown) {
    super(`"${cl}" is not a function(/constructor)!`);
  }
}

export class AssertionFallbackError extends Error {
  constructor() {
    super('Assert failed - no custom error [E019]');
  }
}

/** Error for when an unknown WhatIsIt is passed to an switch, gets thrown in the default case */
export class InvalidWhatIsItError extends Error {
  constructor(whatisit: unknown, name: string, key: string, where: string) {
    super(`"${whatisit}"(${where}) is invalid for "${name}.${key}" [E013]`);
  }
}

export class CannotBeSymbolError extends Error {
  constructor(name: string, key: string | symbol) {
    super(`A property key in Typegoose cannot be an symbol! ("${name}.${String(key)}") [E024]`);
  }
}

export class SelfContainingClassError extends TypeError {
  constructor(name: string, key: string) {
    super(
      'It seems like the type used is the same as the target class, which is not supported\n' +
        `Please look at https://github.com/typegoose/typegoose/issues/42 for more information ("${name}.${key}") [E004]`
    );
  }
}

export class OptionRefDoesNotSupportArraysError extends TypeError {
  constructor(dim: number, name: string, key: string) {
    super(`Prop-Option "ref" does not support Arrays! (got "${dim}" dimensions, for property "${name}.${key}") [E021]`);
  }
}

export class RefOptionIsUndefinedError extends Error {
  constructor(name: string, key: string) {
    super(`Prop-Option "ref"'s value is "null" or "undefined" for "${name}.${key}" [E005]`);
  }
}

export class NotValidModelError extends TypeError {
  constructor(model: unknown, where: string) {
    super(`Expected "${where}" to be a valid mongoose.Model! (got: "${model}") [E025]`);
  }
}

export class FunctionCalledMoreThanSupportedError extends Error {
  constructor(functionName: string, supported: number, extra: string) {
    super(`Function "${functionName}" only supports to be called "${supported}" times with the same parameters [E003]\n${extra}`);
  }
}

export class StringLengthExpectedError extends TypeError {
  constructor(length: number, got: any, where: string, valueName: string) {
    // create the "got:" message, when string say it was a string, but not the length
    // if not string, then say it is not a string plus the value
    const gotMessage = typeof got === 'string' ? `(String: "${got.length}")` : `(not-String: "${got}")`;

    super(`Expected "${valueName}" to have at least length of "${length}" (got: ${gotMessage}, where: "${where}") [E026]`);
  }
}
