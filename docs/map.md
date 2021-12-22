# map Schema

```txt
https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/array/map.json
```

You can use map to perform an action on every member of an array. Note, that inside the logic being used to map, var operations are relative to the array element being worked on.


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                  |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ----------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [map.json](operators/array/map.json "open original schema") |

## map Type

`object` ([map](map.md))

## map Examples

```json
{
  "map": [
    {
      "var": "integers"
    },
    {
      "*": [
        {
          "var": ""
        },
        2
      ]
    }
  ]
}
```

# map Properties

| Property    | Type   | Required | Nullable       | Defined by                                                                                                      |
| :---------- | ------ | -------- | -------------- | :-------------------------------------------------------------------------------------------------------------- |
| [map](#map) | Merged | Required | cannot be null | [map](map-properties-binary-arg.md "http&#x3A;//jsonlogic.com/schemas/common/binary-args.json#/properties/map") |

## map

Up to two args of valid JSON Logic data source.


`map`

-   is required
-   Type: merged type ([Binary Arg](map-properties-binary-arg.md))
-   cannot be null
-   defined in: [map](map-properties-binary-arg.md "http&#x3A;//jsonlogic.com/schemas/common/binary-args.json#/properties/map")

### map Type

merged type ([Binary Arg](map-properties-binary-arg.md))

one (and only one) of

-   [Array](binary-args-oneof-array.md "check type definition")
-   one (and only one) of

    -   one (and only one) of

        -   [var](all-operators-oneof-var.md "check type definition")
        -   [missing](all-operators-oneof-missing.md "check type definition")
        -   [missing_some](all-operators-oneof-missing_some.md "check type definition")
        -   [+](all-operators-oneof--4.md "check type definition")
        -   [/](all-operators-oneof--5.md "check type definition")
        -   [%](all-operators-oneof--2.md "check type definition")
        -   [\*](all-operators-oneof--3.md "check type definition")
        -   [-](all-operators-oneof--.md "check type definition")
        -   [all](all-operators-oneof-all.md "check type definition")
        -   [filter](var-oneof-filter.md "check type definition")
        -   [map](var-oneof-map.md "check type definition")
        -   [merge](var-oneof-merge.md "check type definition")
        -   [none](all-operators-oneof-none.md "check type definition")
        -   [reduce](var-oneof-reduce.md "check type definition")
        -   [some](all-operators-oneof-some.md "check type definition")
        -   [and](all-operators-oneof-and.md "check type definition")
        -   [Equal](all-operators-oneof-equal.md "check type definition")
        -   one (and only one) of

            -   [Untitled object in if](if-oneof-0.md "check type definition")
            -   [Untitled object in if](if-oneof-1.md "check type definition")
        -   [!](all-operators-oneof-.md "check type definition")
        -   [Not-Equal](all-operators-oneof-not-equal.md "check type definition")
        -   [!!](all-operators-oneof--1.md "check type definition")
        -   [or](all-operators-oneof-or.md "check type definition")
        -   [Strict Equal](all-operators-oneof-strict-equal.md "check type definition")
        -   [Strict Not-Equal](all-operators-oneof-strict-not-equal.md "check type definition")
        -   [in](all-operators-oneof-in.md "check type definition")
        -   [log](all-operators-oneof-log.md "check type definition")
        -   [method](all-operators-oneof-method.md "check type definition")
        -   [>](all-operators-oneof--8.md "check type definition")
        -   [>=](all-operators-oneof--9.md "check type definition")
        -   [&lt;](all-operators-oneof--6.md "check type definition")
        -   [&lt;=](all-operators-oneof--7.md "check type definition")
        -   [max](all-operators-oneof-max.md "check type definition")
        -   [min](all-operators-oneof-min.md "check type definition")
        -   [cat](all-operators-oneof-cat.md "check type definition")
        -   [substr](all-operators-oneof-substr.md "check type definition")
    -   one (and only one) of

        -   [Untitled undefined type in All](all-types-wo-array-oneof-0.md "check type definition")
        -   one (and only one) of

            -   [Empty object.](no-logic-object-oneof-empty-object.md "check type definition")
            -   [Non-Logic single key object.](no-logic-object-oneof-non-logic-single-key-object.md "check type definition")
            -   [Non-Logic multiple key object.](no-logic-object-oneof-non-logic-multiple-key-object.md "check type definition")
