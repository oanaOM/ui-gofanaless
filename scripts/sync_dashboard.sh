JSONNET_PATH=grafonnet-lib \
  jsonnet dashboard.jsonnet > dashboard.json

payload="{\"dashboard\": $(jq . dashboard.json), \"overwrite\": true}"

curl -X POST $BASIC_AUTH \
  -H 'Content-Type: application/json' \
  -d "${payload}" \
  "http://admin:militate_missive_rack@localhost:3000/api/dashboards/db"