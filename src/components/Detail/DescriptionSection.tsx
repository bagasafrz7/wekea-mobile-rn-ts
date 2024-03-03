import React from 'react'
import { DataTable } from 'react-native-paper'
import Typography from '../Global/Typography'
import { VStack } from '../Global/VStack'

export default function DescriptionSection ({ data }: any) {
  return (
    <VStack gap="10px">
      <Typography size="lg" weight="bold">
        Deskripsi & Spesifikasi
      </Typography>

      <Typography size="md" weight="light" color="secondary">
        {data?.description}
      </Typography>

      <DataTable>
        <DataTable.Header>
          <DataTable.Title>
            <Typography size="md" weight="bold" color="secondary">
              Spesifikasi
            </Typography>
          </DataTable.Title>
        </DataTable.Header>

        {
          data.specifications?.map((item: any, index: number) => (
            <DataTable.Row key={index}>
              <DataTable.Cell>{item.title}</DataTable.Cell>
              <DataTable.Cell>{item.description}</DataTable.Cell>
            </DataTable.Row>
          ))
        }
      </DataTable>
    </VStack>
  )
}
