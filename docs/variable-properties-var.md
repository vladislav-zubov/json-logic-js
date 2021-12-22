# Var Schema

```txt
https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/common/var.json#/properties/var
```

Retrieve data from the provided data object.


| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                 |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | -------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [variable.json\*](operators/accessor/variable.json "open original schema") |

## var Type

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
