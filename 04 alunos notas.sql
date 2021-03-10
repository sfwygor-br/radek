select case
            when n.nota < 8 then
                null
            else
                a.nome
       end as nome
     , n.nota
     , a.valor
  from aluno a
     , notas n
 where 1 = 1
   and a.valor between n.valor_min and n.valor_max
order by a.nome
       , (case when n.nota > 8 then n.nota else null end) desc
       , (case when n.nota < 8 then n.nota else null end) asc;