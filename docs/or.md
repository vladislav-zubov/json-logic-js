# or Schema

```txt
http://jsonlogic.com/schemas/operators/logic/or.json
```

or can be used for simple boolean tests, with 1 or more arguments. At a more sophisticated level, or returns the first truthy argument, or the last argument.


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | --------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [or.json](operators/logic/or.json "open original schema") |

## or Type

`object` ([or](or.md))

## or Examples

```json
{
  "or": [
    true,
    false
  ]
}
```

```json
{
  "or": [
    false,
    true
  ]
}
```

```json
{
  "or": [
    false,
    "a"
  ]
}
```

```json
{
  "or": [
    false,
    0,
    "a"
  ]
}
```

# or Properties

| Property  | Type   | Required | Nullable       | Defined by                                                                                                             |
| :-------- | ------ | -------- | -------------- | :--------------------------------------------------------------------------------------------------------------------- |
| [or](#or) | Merged | Required | cannot be null | [or](cat-properties-1-or-more-args.md "http&#x3A;//jsonlogic.com/schemas/common/one-or-more-args.json#/properties/or") |

## or

With 1 or more arguments.


`or`

-   is required
-   Type: merged type ([1 or more args](cat-properties-1-or-more-args.md))
-   cannot be null
-   defined in: [or](cat-properties-1-or-more-args.md "http&#x3A;//jsonlogic.com/schemas/common/one-or-more-args.json#/properties/or")

### or Type

merged type ([1 or more args](cat-properties-1-or-more-args.md))

one (and only one) of

-   [Single Array](one-or-more-args-oneof-single-array.md "check type definition")
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
