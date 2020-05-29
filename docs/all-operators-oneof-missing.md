# missing Schema

```txt
http://jsonlogic.com/schemas/operators/accessor/missing.json#/oneOf/1
```

Takes an array of data keys to search for (same format as var). Returns an array of any keys that are missing from the data object, or an empty array.


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                               |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [all-operators.json\*](common/all-operators.json "open original schema") |

## 1 Type

`object` ([missing](all-operators-oneof-missing.md))

## 1 Examples

```json
{
  "missing": [
    "a",
    "b"
  ]
}
```

```json
{
  "if": [
    {
      "missing": [
        "a",
        "b"
      ]
    },
    "'a' and/or 'b' are missing",
    "OK to proceed"
  ]
}
```

# missing Properties

| Property            | Type   | Required | Nullable       | Defined by                                                                                                    |
| :------------------ | ------ | -------- | -------------- | :------------------------------------------------------------------------------------------------------------ |
| [missing](#missing) | Merged | Required | cannot be null | [missing](variable-properties-var.md "http&#x3A;//jsonlogic.com/schemas/common/var.json#/properties/missing") |

## missing

Retrieve data from the provided data object.


`missing`

-   is required
-   Type: merged type ([Var](variable-properties-var.md))
-   cannot be null
-   defined in: [missing](variable-properties-var.md "http&#x3A;//jsonlogic.com/schemas/common/var.json#/properties/missing")

### missing Type

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
