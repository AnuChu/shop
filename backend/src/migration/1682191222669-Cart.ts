import { MigrationInterface, QueryRunner } from 'typeorm';

export class Cart1682191222669 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS "cart" (id serial PRIMARY KEY, count INT)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "cart"`);
  }
}
