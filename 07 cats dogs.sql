select distinct name
  from cats c
union all
select distinct name
  from dogs d;