curl -X POST \
  localhost:3001/api/v1/members/9786054/memberships \
  --cookie "ah_token=0744a616-277b-4fee-ad2a-7ae271f382d6.dd2843cd-f2ae-49be-8026-054a34148dd7" \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json' \
  -d '{
	"membership": "NUTRIRECM"
}'

localhost:3001/api/v1/members/9786054/memberships

curl -X GET \
  localhost:3001/api/v1/member \
  --cookie "ah_token=0744a616-277b-4fee-ad2a-7ae271f382d6.dd2843cd-f2ae-49be-8026-054a34148dd7" \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json'
  