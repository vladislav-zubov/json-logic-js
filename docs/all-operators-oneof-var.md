# var Schema

```txt
http://jsonlogic.com/schemas/operators/accessor/variable.json#/oneOf/0
```

Retrieve data from the provided data object.


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                               |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [all-operators.json\*](common/all-operators.json "open original schema") |

## 0 Type

`object` ([var](all-operators-oneof-var.md))

# var Properties

| Property    | Type   | Required | Nullable       | Defined by                                                                                            |
| :---------- | ------ | -------- | -------------- | :---------------------------------------------------------------------------------------------------- |
| [var](#var) | Merged | Required | cannot be null | [var](variable-properties-var.md "http&#x3A;//jsonlogic.com/schemas/common/var.json#/properties/var") |

## var

Retrieve data from the provided data object.


`var`

-   is required
-   Type: merged type ([Var](variable-properties-var.md))
-   cannot be null
-   defined in: [var](variable-properties-var.md "http&#x3A;//jsonlogic.com/schemas/common/var.json#/properties/var")

### var Type

merged type ([Var](variable-properties-var.md))

one (and only one) of

-   [Untitled array in Var](var-oneof-0.md "check type definition")
-   [map](var-oneof-map.md "check type definition")
-   [merge](var-oneof-merge.md "check type definition")
-   [filter](var-oneof-filter.md "check type definition")
-   [reduce](var-oneof-reduce.md "check type definition")
-   one (and only one) of

    -   [Property](pointer-oneof-property.md "check type definition")
    -   [Index](pointer-oneof-index.md "check type definition")
-   [Entire data object](var-oneof-entire-data-object.md "check type definition")
-   [Null](var-oneof-null.md "check type definition")
