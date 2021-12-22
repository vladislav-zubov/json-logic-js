<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [README](#readme)
  - [Top-level Schemas](#top-level-schemas)
  - [Other Schemas](#other-schemas)
    - [Objects](#objects)
    - [Arrays](#arrays)
  - [Version Note](#version-note)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# README

## Top-level Schemas

-   [!](./not.md "Logical negation (“not”)") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/logic/not.json`
-   [!!](./notnot.md "Double negation, or “cast to a boolean") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/logic/notnot.json`
-   [%](./modulo.md "Module") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/arithmetic/modulo.json`
-   [\*](./multiply.md "Multiplication") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/arithmetic/multiply.json`
-   [+](./add.md "Addition") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/arithmetic/add.json`
-   [-](./subtract.md "Subtraction") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/arithmetic/subtract.json`
-   [/](./divide.md "Division") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/arithmetic/divide.json`
-   [1 or more args](./one-or-more-args.md "With 1 or more arguments") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/common/one-or-more-args.json`
-   [&lt;](./less.md "Less than") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/numeric/less.json`
-   [&lt;=](./lessequal.md "Less than or equal to") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/numeric/lessEqual.json`
-   [>](./greater.md "Greater than") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/numeric/greater.json`
-   [>=](./greaterequal.md "Greater than or equal to") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/numeric/greaterEqual.json`
-   [All](./all-types-wo-array.md "Any valid JSON data type, except array primitive") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/common/all-types-wo-array.json`
-   [All](./all-types.md "Any valid JSON data type") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/common/all-types.json`
-   [All](./any-wo-array.md "Any valid JSON Logic data source, except array primitive") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/common/any-wo-array.json`
-   [All](./any.md "Any valid JSON Logic data source") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/common/any.json`
-   [All Operators](./all-operators.md "Any valid JSON Logic data source, expect primitive types") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/common/all-operators.json`
-   [Binary Arg](./binary-args.md "Up to two args of valid JSON Logic data source") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/common/binary-args.json`
-   [Equal](./equal.md "Tests equality, with type coercion") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/logic/equal.json`
-   [JSON-Logic Schema](./json-logic.md "Build complex rules, serialize them as JSON, share them between front-end and back-end") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/json-logic.json`
-   [No-Logic](./no-logic-object.md "Any valid JSON object which is not a logic rule") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/common/no-logic-object.json`
-   [Not-Equal](./notequal.md "Tests not-equal, with type coercion") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/logic/notEqual.json`
-   [Pointer](./pointer.md "Schema to access properties of an object or items of an array by index") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/common/pointer.json`
-   [Strict Equal](./strictequal.md "Tests strict equality") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/logic/strictEqual.json`
-   [Strict Not-Equal](./strictnotequal.md "Tests strict not-equal") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/logic/strictNotEqual.json`
-   [Trinary Args](./trinary-args.md "Up to three args of valid JSON Logic data source") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/common/trinary-args.json`
-   [Unary Arg](./unary-arg.md "Only one valid JSON Logic data source") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/common/unary-arg.json`
-   [Var](./var.md "Retrieve data from the provided data object") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/common/var.json`
-   [all](./all.md "These operations take an array, and perform a test on each member of that array") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/array/all.json`
-   [and](./and.md "and can be used for simple boolean tests, with 1 or more arguments") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/logic/and.json`
-   [cat](./cat.md "Concatenate all the supplied arguments") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/string/cat.json`
-   [filter](./filter.md "You can use filter to keep only elements of the array that pass a test") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/array/filter.json`
-   [if](./if.md 'The if statement typically takes 3 arguments: a condition (if), what to do if it’s true (then), and what to do if it’s false (else), like: {"if" :  true, "yes", "no" }') – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/logic/if.json`
-   [in](./in.md 'If the second argument is an array, tests that the first argument is a member of the array: {"in":\[ "Ringo", "John", "Paul", "George", "Ringo" ]}') – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/misc/in.json`
-   [log](./log.md "Logs the first value to console, then passes it through unmodified") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/misc/log.json`
-   [map](./map.md "You can use map to perform an action on every member of an array") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/array/map.json`
-   [max](./max.md "Return the maximum from a list of values") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/numeric/max.json`
-   [merge](./merge.md "Takes one or more arrays, and merges them into one array") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/array/merge.json`
-   [method](./method.md "If your rule needs to call a method on an object, you can use the built-in method operation") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/misc/method.json`
-   [min](./min.md "Return the minimum from a list of values") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/numeric/min.json`
-   [missing](./missing.md "Takes an array of data keys to search for (same format as var)") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/accessor/missing.json`
-   [missing_some](./missing_some.md "Takes a minimum number of data keys that are required, and an array of keys to search for (same format as var or missing)") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/accessor/missing_some.json`
-   [none](./none.md "These operations take an array, and perform a test on each member of that array") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/array/none.json`
-   [or](./or.md "or can be used for simple boolean tests, with 1 or more arguments") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/logic/or.json`
-   [reduce](./reduce.md "You can use reduce to combine all the elements in an array into a single value, like adding up a list of numbers") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/array/reduce.json`
-   [some](./some.md "These operations take an array, and perform a test on each member of that array") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/array/some.json`
-   [substr](./substr.md "Get a portion of a string") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/string/substr.json`
-   [var](./variable.md "Retrieve data from the provided data object") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/accessor/variable.json`

## Other Schemas

### Objects

-   [!](./all-operators-oneof-.md "Logical negation (“not”)") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/logic/not.json#/oneOf/18`
-   [!!](./all-operators-oneof--1.md "Double negation, or “cast to a boolean") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/logic/notnot.json#/oneOf/20`
-   [%](./all-operators-oneof--2.md "Module") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/arithmetic/modulo.json#/oneOf/5`
-   [\*](./all-operators-oneof--3.md "Multiplication") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/arithmetic/multiply.json#/oneOf/6`
-   [+](./all-operators-oneof--4.md "Addition") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/arithmetic/add.json#/oneOf/3`
-   [-](./all-operators-oneof--.md "Subtraction") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/arithmetic/subtract.json#/oneOf/7`
-   [/](./all-operators-oneof--5.md "Division") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/arithmetic/divide.json#/oneOf/4`
-   [&lt;](./all-operators-oneof--6.md "Less than") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/numeric/less.json#/oneOf/29`
-   [&lt;=](./all-operators-oneof--7.md "Less than or equal to") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/numeric/lessEqual.json#/oneOf/30`
-   [>](./all-operators-oneof--8.md "Greater than") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/numeric/greater.json#/oneOf/27`
-   [>=](./all-operators-oneof--9.md "Greater than or equal to") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/numeric/greaterEqual.json#/oneOf/28`
-   [Empty object.](./no-logic-object-oneof-empty-object.md) – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/common/no-logic-object.json#/oneOf/0`
-   [Empty object.](./no-logic-object-oneof-empty-object.md) – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/common/no-logic-object.json#/oneOf/0`
-   [Equal](./all-operators-oneof-equal.md "Tests equality, with type coercion") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/logic/equal.json#/oneOf/16`
-   [Non-Logic multiple key object.](./no-logic-object-oneof-non-logic-multiple-key-object.md) – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/common/no-logic-object.json#/oneOf/2`
-   [Non-Logic multiple key object.](./no-logic-object-oneof-non-logic-multiple-key-object.md) – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/common/no-logic-object.json#/oneOf/2`
-   [Not-Equal](./all-operators-oneof-not-equal.md "Tests not-equal, with type coercion") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/logic/notEqual.json#/oneOf/19`
-   [Strict Equal](./all-operators-oneof-strict-equal.md "Tests strict equality") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/logic/strictEqual.json#/oneOf/22`
-   [Strict Not-Equal](./all-operators-oneof-strict-not-equal.md "Tests strict not-equal") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/logic/strictNotEqual.json#/oneOf/23`
-   [Untitled object in No-Logic](./no-logic-object-oneof-non-logic-single-key-object-allof-1-not.md) – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/common/no-logic-object.json#/oneOf/1/allOf/1/not`
-   [Untitled object in No-Logic](./no-logic-object-oneof-non-logic-single-key-object-allof-0.md) – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/common/no-logic-object.json#/oneOf/1/allOf/0`
-   [Untitled object in No-Logic](./no-logic-object-oneof-non-logic-single-key-object-allof-0.md) – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/common/no-logic-object.json#/oneOf/1/allOf/0`
-   [Untitled object in No-Logic](./no-logic-object-oneof-non-logic-single-key-object-allof-1-not.md) – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/common/no-logic-object.json#/oneOf/1/allOf/1/not`
-   [Untitled object in if](./if-oneof-0.md) – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/logic/if.json#/oneOf/0`
-   [Untitled object in if](./if-oneof-0.md) – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/logic/if.json#/oneOf/0`
-   [Untitled object in if](./if-oneof-1.md) – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/logic/if.json#/oneOf/1`
-   [Untitled object in if](./if-oneof-1.md) – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/logic/if.json#/oneOf/1`
-   [all](./all-operators-oneof-all.md "These operations take an array, and perform a test on each member of that array") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/array/all.json#/oneOf/8`
-   [and](./all-operators-oneof-and.md "and can be used for simple boolean tests, with 1 or more arguments") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/logic/and.json#/oneOf/15`
-   [filter](./var-oneof-filter.md "You can use filter to keep only elements of the array that pass a test") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/array/filter.json#/oneOf/3`
-   [in](./all-operators-oneof-in.md 'If the second argument is an array, tests that the first argument is a member of the array: {"in":\[ "Ringo", "John", "Paul", "George", "Ringo" ]}') – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/misc/in.json#/oneOf/24`
-   [log](./all-operators-oneof-log.md "Logs the first value to console, then passes it through unmodified") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/misc/log.json#/oneOf/25`
-   [map](./var-oneof-map.md "You can use map to perform an action on every member of an array") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/array/map.json#/oneOf/1`
-   [max](./all-operators-oneof-max.md "Return the maximum from a list of values") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/numeric/max.json#/oneOf/31`
-   [merge](./var-oneof-merge.md "Takes one or more arrays, and merges them into one array") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/array/merge.json#/oneOf/2`
-   [method](./all-operators-oneof-method.md "If your rule needs to call a method on an object, you can use the built-in method operation") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/misc/method.json#/oneOf/26`
-   [min](./all-operators-oneof-min.md "Return the minimum from a list of values") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/numeric/min.json#/oneOf/32`
-   [missing](./all-operators-oneof-missing.md "Takes an array of data keys to search for (same format as var)") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/accessor/missing.json#/oneOf/1`
-   [missing_some](./all-operators-oneof-missing_some.md "Takes a minimum number of data keys that are required, and an array of keys to search for (same format as var or missing)") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/accessor/missing_some.json#/oneOf/2`
-   [none](./all-operators-oneof-none.md "These operations take an array, and perform a test on each member of that array") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/array/none.json#/oneOf/12`
-   [or](./all-operators-oneof-or.md "or can be used for simple boolean tests, with 1 or more arguments") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/logic/or.json#/oneOf/21`
-   [reduce](./var-oneof-reduce.md "You can use reduce to combine all the elements in an array into a single value, like adding up a list of numbers") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/array/reduce.json#/oneOf/4`
-   [some](./all-operators-oneof-some.md "These operations take an array, and perform a test on each member of that array") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/array/some.json#/oneOf/14`
-   [substr](./all-operators-oneof-substr.md "Get a portion of a string") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/string/substr.json#/oneOf/34`
-   [var](./all-operators-oneof-var.md "Retrieve data from the provided data object") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/accessor/variable.json#/oneOf/0`

### Arrays

-   [Array](./binary-args-oneof-array.md "An array with one or two elements") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/common/binary-args.json#/oneOf/0`
-   [Array](./trinary-args-oneof-array.md "An array with one or three elements") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/common/trinary-args.json#/oneOf/0`
-   [Array](./binary-args-oneof-array.md "An array with one or two elements") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/common/binary-args.json#/oneOf/0`
-   [Array](./trinary-args-oneof-array.md "An array with one or three elements") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/common/trinary-args.json#/oneOf/0`
-   [Single Array](./one-or-more-args-oneof-single-array.md "An array with 1 or more elements") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/common/one-or-more-args.json#/oneOf/0`
-   [Single Array](./unary-arg-oneof-single-array.md "An array with just one element") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/common/unary-arg.json#/oneOf/0`
-   [Single Array](./unary-arg-oneof-single-array.md "An array with just one element") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/common/unary-arg.json#/oneOf/0`
-   [Single Array](./one-or-more-args-oneof-single-array.md "An array with 1 or more elements") – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/common/one-or-more-args.json#/oneOf/0`
-   [Untitled array in Var](./var-oneof-0.md) – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/common/var.json#/oneOf/0`
-   [Untitled array in Var](./var-oneof-0.md) – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/common/var.json#/oneOf/0`
-   [Untitled array in missing_some](./missing_some-properties-missing_some.md) – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/accessor/missing_some.json#/properties/missing_some`
-   [Untitled array in missing_some](./missing_some-properties-missing_some.md) – `https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/accessor/missing_some.json#/properties/missing_some`

## Version Note

The schemas linked above follow the JSON Schema Spec version: `http://json-schema.org/draft-07/schema#`
