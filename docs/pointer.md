# Pointer Schema

```txt
https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/common/pointer.json
```

Schema to access properties of an object or items of an array by index.


| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                 |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | ---------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [pointer.json](common/pointer.json "open original schema") |

## Pointer Type

merged type ([Pointer](pointer.md))

one (and only one) of

-   [Property](pointer-oneof-property.md "check type definition")
-   [Index](pointer-oneof-index.md "check type definition")
